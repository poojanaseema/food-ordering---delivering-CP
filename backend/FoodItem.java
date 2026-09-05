import java.util.ArrayList;

public class FoodItem {

    static ArrayList<String> foods = new ArrayList<>();

    public static void addFood(String foodName) {
        foods.add(foodName);
        System.out.println("Food added: " + foodName);
    }

    public static void viewFoods() {
        System.out.println("Available Foods:");

        for (String food : foods) {
            System.out.println(food);
        }
    }
}
