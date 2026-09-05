import java.util.ArrayList;

public class Order {

    static ArrayList<String> orders = new ArrayList<>();

    public static void placeOrder(String foodName) {
        orders.add(foodName);
        System.out.println("Order placed successfully: " + foodName);
    }

    public static void viewOrders() {
        System.out.println("Your Orders:");

        for (String order : orders) {
            System.out.println(order);
        }
    }
}
