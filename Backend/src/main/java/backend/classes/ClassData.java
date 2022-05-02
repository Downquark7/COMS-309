package backend.classes;

import backend.instructors.Instructor;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/***
 * class database entity class
 */
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ClassData
{
    @Id
    private int id;

    private String semesterCode;
    private String semesterYear;
    private String deptCode;
    private String classNumber;
    private String departmentTitle;
    private String classTitle;

    @Column(columnDefinition = "TEXT")
    private String classComments;
    private String classPreReqs;

    @OneToMany
    private List<Section> sections;

    @Column(columnDefinition = "TEXT")
    private String classDescription;

    @JsonIgnore
    @ManyToMany
    private List<Instructor> instructorList = new ArrayList<>();

    public ClassData()
    {
        sections = new ArrayList<>();
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public String getSemesterCode()
    {
        return semesterCode;
    }

    public void setSemesterCode(String semesterCode)
    {
        this.semesterCode = semesterCode;
    }

    public String getSemesterYear()
    {
        return semesterYear;
    }

    public void setSemesterYear(String semesterYear)
    {
        this.semesterYear = semesterYear;
    }

    public String getDeptCode()
    {
        return deptCode;
    }

    public void setDeptCode(String deptCode)
    {
        this.deptCode = deptCode;
    }

    public String getClassNumber()
    {
        return classNumber;
    }

    public void setClassNumber(String classNumber)
    {
        this.classNumber = classNumber;
    }

    public String getDepartmentTitle()
    {
        return departmentTitle;
    }

    public void setDepartmentTitle(String departmentTitle)
    {
        this.departmentTitle = departmentTitle;
    }

    public String getClassTitle()
    {
        return classTitle;
    }

    public void setClassTitle(String classTitle)
    {
        this.classTitle = classTitle;
    }

    public String getClassComments()
    {
        return classComments;
    }

    public void setClassComments(String classComments)
    {
        this.classComments = classComments;
    }

    public String getClassPreReqs()
    {
        return classPreReqs;
    }

    public void setClassPreReqs(String classPreReqs)
    {
        this.classPreReqs = classPreReqs;
    }

    public List<Section> getSections()
    {
        return sections;
    }

    public void setSections(List<Section> sections)
    {
        this.sections = sections;
    }

    public List<Instructor> getInstructorList()
    {
        return instructorList;
    }

    public void setInstructorList(List<Instructor> instructorList)
    {
        this.instructorList = instructorList;
    }

    public void addInstructor(Instructor instructor)
    {
        instructorList.add(instructor);
    }

    public void removeInstructor(Instructor instructor)
    {
        instructorList.remove(instructor);
    }

    public String getClassDescription()
    {
        return classDescription;
    }

    public void setClassDescription(String classDescription)
    {
        this.classDescription = classDescription;
    }
}
