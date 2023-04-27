// WAP a program to input two numbers from the keyboard and print their average

use std::io;

fn main() {
    // Declare the variables we'll need
    let (mut a, mut b, mut avg) = (String::new(), String::new(), 0);
    // Getting user input
    println!("Enter the first number: ");
    io::stdin().read_line(&mut a).expect("Error reading input");
    println!("Enter the second number: ");
    io::stdin().read_line(&mut b).expect("Error reading input");
    // Converting the strings to integers
    let num1: i32 = a.trim().parse().ok().expect("Error parsing input");
    let num2: i32 = b.trim().parse().ok().expect("Error parsing input");
    avg = (num1 + num2) / 2;

    println!("The average is {}", avg);
}