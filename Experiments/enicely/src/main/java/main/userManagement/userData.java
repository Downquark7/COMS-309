package main.userManagement;

import net.minidev.json.annotate.JsonIgnore;

public class userData
{
    private String username;
    private String authenticationMethod;
    private int id;

    @JsonIgnore
    private String authenticationData;

    public String getUsername()
    {
        return username;
    }

    public void setUsername(String username)
    {
        this.username = username;
    }

    public String getAuthenticationMethod()
    {
        return authenticationMethod;
    }

    public void setAuthenticationMethod(String authenticationMethod)
    {
        this.authenticationMethod = authenticationMethod;
    }

    public String getAuthenticationData()
    {
        return authenticationData;
    }

    public void setAuthenticationData(String authenticationData)
    {
        this.authenticationData = authenticationData;
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }
}
