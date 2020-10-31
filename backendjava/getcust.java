import java.sql.*;
import java.util.*;

public class getcust {

    public static void main(String args[]) {
        try {
            /* set user id and password on  server */
            Properties props = new Properties();
            props.put("user", "student");
            props.put("password", "student");

            /* establish connection to lagacy DB */
            Connection con = DriverManager.getConnection("jdbc:mysql://blitz.cs.niu.edu/csci467", props);
            Statement stmt = con.createStatement();

            System.out.println("connected to mySQL database");

            /* formulate SQL query */
            StringBuffer query = new StringBuffer();
            query.append("select * from customers");
            System.out.println("query is: " + query);

            /* execute SQL query */
            ResultSet rs = stmt.executeQuery(query.toString());
            while (rs.next()) {
                System.out.println(rs.getString(1) + " - " + rs.getString(2) + " - " + rs.getString(3) + " - " + rs.getString(4) + " - " + rs.getString(5));
            }

        } catch (Exception e) {
            System.out.println("Unexpected exception : "
                    + e.toString());
            e.printStackTrace();
        }
    }
}
