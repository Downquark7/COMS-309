package com.example.classdifficultyfrontend;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Spinner;
import android.widget.TextView;

public class Course_matcher extends AppCompatActivity {

    Spinner Spinner;
    TextView Class_desc, Class_diff;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_course_matcher);

        Spinner = (Spinner)findViewById(R.id.spinner);
        Class_desc = (TextView)findViewById(R.id.class_desc);
        Class_diff = (TextView)findViewById(R.id.class_diff);

        ArrayAdapter adapter = ArrayAdapter.createFromResource(this,
                R.array.Classes_2, R.layout.spinner);

        adapter.setDropDownViewResource(R.layout.spinner);
        Spinner.setAdapter(adapter);

        Spinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            public void onItemSelected(AdapterView<?> arg0, View arg1,
                                       int arg2, long arg3) {
                if (Spinner.getSelectedItem().toString().equals("COMS 309")) {
                    Class_desc.setText("A practical introduction to methods for managing software development. Process models, requirements analysis, structured and object-oriented design, coding, testing, maintenance, cost and schedule estimation, metrics. Programming projects.");
                    Class_diff.setText("3/5");

                }
                else if (Spinner.getSelectedItem().toString().equals("COMS 319")) {
                    Class_desc.setText("Overview of user interface design. Evaluation and testing of user interfaces. Review of principles of object orientation, object oriented design and analysis using UML in the context of user interface design. Design of windows, menus and commands. Developing Web and Windows-based user-interfaces. Event-driven programming. Introduction to Frameworks and APIs for the construction of user interfaces.");
                    Class_diff.setText("2/5");

                }
                else if (Spinner.getSelectedItem().toString().equals("COMS 327")) {
                    Class_desc.setText("Object-oriented programming experience using a language suitable for exploring advanced topics in programming. Topics include memory management, parameter passing, inheritance, compiling, debugging, and maintaining programs. Significant programming projects.");
                    Class_diff.setText("5/5");

                }
                else if (Spinner.getSelectedItem().toString().equals("COMS 417")) {
                    Class_desc.setText("An introduction to software testing principles and techniques. Test models, test design, test adequacy criteria; regression, integration, and system testing; and software testing tools.");
                    Class_diff.setText("4/5");

                }
            }
            public void onNothingSelected(AdapterView<?> arg0) {

            }
        });

        //Class_desc.setText(txtFromSpinner);


//        if (txtFromSpinner.equals("COMS 309"))
//        {
//        Class_desc.setText("A practical introduction to methods for managing software development. Process models, requirements analysis, structured and object-oriented design, coding, testing, maintenance, cost and schedule estimation, metrics. Programming projects.");
//        Class_diff.setText("3/5");
//        }
    }
}