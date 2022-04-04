package com.example.classdifficultyfrontend;

import android.os.Bundle;

import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;

import android.view.View;
import android.widget.TextView;

import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.classdifficultyfrontend.databinding.ActivityScheduleBinding;

import java.time.LocalTime;
import java.util.ArrayList;

import schedule.ScheduleAdapter;

public class ScheduleActivity extends AppCompatActivity implements ScheduleAdapter.OnItemListener{ // a lot of this code is based on the example given in this youtube tutorial: https://www.youtube.com/watch?v=Ba0Q-cK1fJo&ab_channel=CodeWithCal
    private TextView hourDayText;
    private RecyclerView hourRecyclerView;
   // private LocalTime selectedTime;
    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_schedule);
        initWidgets();
        //selectedTime = LocalTime.now();
        setHourDayView();
    }
    private void initWidgets(){
        hourRecyclerView = findViewById(R.id.schedule_hourRecyclerView);

    }
    private void setHourDayView(){
        ArrayList<String> hoursInDay = hoursInDayArray();
        ScheduleAdapter scheduleAdapter = new ScheduleAdapter(hoursInDay, this);
        RecyclerView.LayoutManager layoutManager = new GridLayoutManager(getApplicationContext(), 7);
        hourRecyclerView.setLayoutManager(layoutManager);
        hourRecyclerView.setAdapter(scheduleAdapter); // TODO This line of code is causing the crashing
    }

    @Override
    public void onItemClick(int position, String dayText) {

    }
    private ArrayList<String> hoursInDayArray(){
        ArrayList<String> hoursInDayArray = new ArrayList<>();
        for(int i = 7; i < 12; i++){
            hoursInDayArray.add(String.valueOf(i)); // TODO Change this later
        }
        return hoursInDayArray;
    }
    // private ArrayList<String>


}