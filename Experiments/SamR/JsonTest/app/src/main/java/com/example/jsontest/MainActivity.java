package com.example.jsontest;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
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

import java.util.Map;
import java.util.HashMap;

//that one gonna return {} tho until you login lol
//Don't forget to 'Content-Type': 'application/json'

public class MainActivity extends AppCompatActivity {
    private TextView TextResult;
    private RequestQueue queue;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        TextResult = findViewById(R.id.text_view_result);
        Button button = findViewById(R.id.button_parse);

        // queue = Volley.newRequestQueue(this);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                postRequest();
            }
        });
    }


    private void postRequest() {
        RequestQueue queue = Volley.newRequestQueue(MainActivity.this);

        String url = "http://coms-309-032.class.las.iastate.edu:8080/user/create";
        JSONObject jsonBody = new JSONObject();
        try {
            jsonBody.put("username", "Pie");
            jsonBody.put("authenticationMethod", "pie");
            jsonBody.put("authenticationData", "pie");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        final String requestBody = jsonBody.toString();
        StringRequest request = new StringRequest(Request.Method.POST, url, new Response.Listener<String>() {
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


//        JsonObjectRequest request = new JsonObjectRequest(Request.Method.GET, url, null,
//                new Response.Listener<JSONObject>() {
//                    @Override
//                    public void onResponse(JSONObject response) {
//                        try {
//                            JSONArray jsonArray = response.getJSONArray("Login");
//                            for(int i =0; i< jsonArray.length(); i++){
//                                JSONObject User = jsonArray.getJSONObject(i);
//
//                                String username = User.getString("Username");
//                                String password = User.getString("password");
//                                int id = User.getInt("id");
//
//                                TextResult.append(username + ", " + password + ", " + String.valueOf(id) + "\n\n");
//                            }
//                        } catch(JSONException e){
//                            e.printStackTrace();
//                        }
//                    }
//                }, new Response.ErrorListener() {
//            @Override
//            public void onErrorResponse(VolleyError error){
//                error.printStackTrace();
//            }
//
//        });
//        queue.add(request);
//    }


//    private void jsonParse(){
//        String url = "http://myjson.dit.upm.es/api/bins/j1r9";
//
//        JsonObjectRequest request = new JsonObjectRequest(Request.Method.GET, url, null,
//                new Response.Listener<JSONObject>() {
//                    @Override
//                    public void onResponse(JSONObject response) {
//                        try {
//                            JSONArray jsonArray = response.getJSONArray("Login");
//                            for(int i =0; i< jsonArray.length(); i++){
//                                JSONObject User = jsonArray.getJSONObject(i);
//
//                                String username = User.getString("Username");
//                                String password = User.getString("password");
//                                int id = User.getInt("id");
//
//                                TextResult.append(username + ", " + password + ", " + String.valueOf(id) + "\n\n");
//                            }
//                        } catch(JSONException e){
//                            e.printStackTrace();
//                        }
//                    }
//                }, new Response.ErrorListener() {
//            @Override
//            public void onErrorResponse(VolleyError error){
//                error.printStackTrace();
//            }
//
//        });
//        queue.add(request);
//    }


}

