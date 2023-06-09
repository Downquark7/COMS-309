package com.example.classdifficultyfrontend;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Parcelable;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import home_page.HomePageActivity;

/**
 *  Main code for the class. allows for teh ability to click on a button, create user, as well as
 *  get the user input in in the according box.
 */
public class User_Create extends AppCompatActivity {
    private TextView TextResult;
    private RequestQueue queue;
    private String text;

    private EditText user;
    private EditText pass;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_create);

        TextResult = findViewById(R.id.out);
        Button button = findViewById(R.id.button);
        user = findViewById(R.id.Username_input);
        pass = findViewById(R.id.Pass_input);


        queue = Volley.newRequestQueue(this);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String Userstr = user.getText().toString().trim();
                String Userpass = pass.getText().toString().trim();

                if(!Userstr.isEmpty() || !Userpass.isEmpty()){
                    postRequest();
                }
            }
        });
    }

    /**
     * Post request that uses Volley to send data to back end
     * uses queue and requestQueue object to send data to the server
     */
    private void postRequest() {
        RequestQueue queue = Volley.newRequestQueue(this);

        String url = "http://coms-309-032.class.las.iastate.edu:8080/user/create";

        String Userstr = user.getText().toString().trim();
        String Userpass = pass.getText().toString().trim();


        JSONObject jsonBody = new JSONObject();
        try {
            jsonBody.put("username", Userstr);
            jsonBody.put("authenticationMethod", Userpass);
            jsonBody.put("authenticationData", Userpass);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        final String requestBody = jsonBody.toString();
        StringRequest request = new StringRequest(Request.Method.POST, url, new Response.Listener<String>() {
            /**
             * On response, get the string passed, and append it to a TextResult. This allows for on-screen showing ,as well as data transfer.
             * outputs to server via textfield object and queue object
             * @param response is the string response
             */
            @Override
            public void onResponse(String response) {
                try {
                    TextResult.setText(response);
                    JSONObject jsonObject = new JSONObject(response);

                    TextResult.setText("Username: " + jsonObject.getString("username"));
                    TextResult.append("\n");
                    TextResult.append("Authentication Method: " + jsonObject.getString("authenticationMethod"));
                    TextResult.append("\n");
                    TextResult.append("Authentication Data: " + jsonObject.getString("authenticationData"));

                   // text = jsonObject.toString();
                    Intent intent = new Intent(getApplicationContext(), Login.class);
//                    intent.putExtra("message_key", text);
                    startActivity(intent);

                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                TextResult.setText(error.toString());
            }
        }) {
            /**
             * make sure correct object is sent
             * @return json object
             */
            @Override
            public String getBodyContentType() {
                return "application/json; charset=utf-8";
            }

            @Override
            public byte[] getBody() throws AuthFailureError {
                return requestBody.getBytes();
            }
        };
        queue.add(request);

    }
}