package classController;

import java.util.ArrayList;
import java.util.List;

public class Instructor
{
    private int id;

    private String instrName;

    private List<ClassData> classes = new ArrayList<>();

    public Instructor(String instrName)
    {
        this.instrName = instrName;
    }

    public Instructor()
    {

    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public String getInstrName()
    {
        return instrName;
    }

    public void setInstrName(String instrName)
    {
        this.instrName = instrName;
    }

    public List<ClassData> getClasses()
    {
        return classes;
    }

    public void setClasses(List<ClassData> classes)
    {
        this.classes = classes;
    }

    public void addClass(ClassData classData)
    {
        if (!classes.contains(classData))
            classes.add(classData);
    }

    public void removeClass(ClassData classData)
    {
        classes.remove(classData);
    }
}
