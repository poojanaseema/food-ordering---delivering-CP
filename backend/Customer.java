import java.util.ArrayList;

public class Customer {

    static ArrayList<String> customers = new ArrayList<>();

    public static void addCustomer(String name) {
        customers.add(name);
        System.out.println("Customer added: " + name);
    }

    public static void viewCustomers() {
        System.out.println("Customers:");

        for (String customer : customers) {
            System.out.println(customer);
        }
    }
}