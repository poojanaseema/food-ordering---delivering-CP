import java.util.ArrayList;

public class Cart {

    static ArrayList<String> cartItems = new ArrayList<>();

    public static void addToCart(String foodName) {
        cartItems.add(foodName);
        System.out.println(foodName + " added to cart.");
    }

    public static void viewCart() {
        System.out.println("Your Cart:");

        for (String item : cartItems) {
            System.out.println(item);
        }
    }
}
