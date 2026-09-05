import java.util.Scanner;

public class Login {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String adminEmail = "admin@gmail.com";
        String adminPassword = "admin123";

        String userEmail = "user@gmail.com";
        String userPassword = "user123";

        System.out.println("===== FOODIE LOGIN =====");

        System.out.print("Enter Email: ");
        String email = sc.nextLine();

        System.out.print("Enter Password: ");
        String password = sc.nextLine();

        if (email.equals(adminEmail) && password.equals(adminPassword)) {

            System.out.println("Admin Login Successful!");

        } 
        else if (email.equals(userEmail) && password.equals(userPassword)) {

            System.out.println("User Login Successful!");

        } 
        else {

            System.out.println("Invalid Email or Password!");

        }

        sc.close();
    }
}