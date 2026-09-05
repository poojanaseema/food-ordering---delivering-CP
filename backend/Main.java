public class Main {

    public static void main(String[] args) {

        // Add customer
        Customer.addCustomer("Pooja");

        // Add food items
        FoodItem.addFood("Chicken Biryani");
        FoodItem.addFood("Pizza");
        FoodItem.addFood("Burger");
        FoodItem.addFood("Noodles");

        // View foods
        FoodItem.viewFoods();

        // Add food to cart
        Cart.addToCart("Chicken Biryani");
        Cart.addToCart("Pizza");

        // View cart
        Cart.viewCart();

        // Place order
        Order.placeOrder("Chicken Biryani");

        // View orders
        Order.viewOrders();
    }
}
