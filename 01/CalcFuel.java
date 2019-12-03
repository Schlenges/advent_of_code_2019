import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class CalcFuel {
    public static void main(String[] args) throws IOException{
        List<Integer> modulesArray = readFile();
        int fuel = 0;

        for(int module : modulesArray){
            fuel += calcModuleFuel(module);
        }

        System.out.println(fuel);
    }

    public static List<Integer> readFile() throws IOException {
        String file = "input.txt";
        Scanner scanner = new Scanner(new File((file)));
        List<Integer> modulesArray = new ArrayList<Integer>();

        while(scanner.hasNext()){
            modulesArray.add(Integer.parseInt(scanner.next()));
        }

        scanner.close();
        return modulesArray;
    }

    public static int calcModuleFuel(int mass){
        int fuel = 0;
        while(extraMass(mass) > 0){
            fuel += extraMass(mass);
            mass = extraMass(mass);
        }
        return fuel;
    }

    private static int extraMass(int mass){
        return Math.abs(mass/3)-2;
    }
}
