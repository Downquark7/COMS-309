package com.example.classdifficultyfrontend;

import android.view.View;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

public class ClassListViewHolder extends RecyclerView.ViewHolder{

    private final TextView classInfo;
    // private final TextView nameOfClass;
    public ClassListViewHolder(@NonNull View itemView) {
        super(itemView);
        classInfo = itemView.findViewById(R.id.item_number);
    }
}
