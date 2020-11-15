import java.sql.*;
import java.io.Console;
public class Data {
        String username;
        Int id;
        String message;
        Int messageId;
    Connection conn =null;
    Statement stmnt = null;
    ResultSet rs = null;
    public int connectDB(String username, char[] password){
        try {
            conn=DriverManager.getConnection(
                    "jdbc:mysql://classdb.it.mtu.edu/ejhalone",
                    username,
                    String.valueOf(password));
        }
        catch(SQLException e){
            System.out.println(e.getMessage());
            e.printStackTrace();
            return 1;
        }
        return 0;
        }
        public void disconnect(){
        try{
            conn.close();
        }
        catch(SQLException ex){
            System.out.println("SQLExcaption: "+ex.getMessage());
            System.out.println("SQLState: "+ ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        }
        public message select(){
        try{
            stmnt = conn.createStatement();
            rs = stmnt.executeQuery("SELECT * FROM appchatuser");
            while (rs.next()){
                System.out.println(rs.getString(1)));
            }
        }
        catch(SQLException ex){
            System.out.println("SQLExcaption: "+ex.getMessage());
            System.out.println("SQLState: "+ ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
    }
    public int withdraw(String account_number,double amount){
        PreparedStatement stmnt = null;
        ResultSet rs = null;
        int rowcount;
        try{
            conn.setAutoCommit(false);
            conn.setTransactionIsolation(conn.TRANSACTION_SERIALIZABLE);
        }
        catch(SQLException e){
            e.printStackTrace();
            return 0;
        }
        try{
            stmnt = conn.prepareStatement("update lab2_account set balance = balance - "+amount+" where account_number = ?");
            stmnt.setString(1,account_number);
            rowcount =  stmnt.executeUpdate();
            if(rowcount!=1){
                System.out.println("Something is wrong!!! You are updating "+rowcount+"rows");
                conn.rollback();
            }
            else{
                conn.commit();
            }
        }
        catch(SQLException ex){
            System.out.println("SQLExcaption: "+ex.getMessage());
            System.out.println("SQLState: "+ ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return 1;
    }
    public static void main(String[] args) {
    Data data = new Data();
    String username = null;
    char[] password = null;
    try{
        Console console = System.console();
        username = console.readLine("Please enter username ");
        password = console.readPassword("Please enter password ");
    }
    catch(Exception ex){
        ex.printStackTrace();
        }
    data.connectDB(username, password);
    data.select();
    data.disconnect();
    }
}