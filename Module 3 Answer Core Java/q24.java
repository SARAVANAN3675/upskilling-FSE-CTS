import java.util.*;
class StudentList {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter names (type 'exit' to stop):");
        while (true) {
            String name = sc.nextLine();
            if (name.equals("exit")) break;
            names.add(name);
        }
        System.out.println("Student names: " + names);
    }
}
