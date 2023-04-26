//WAP to input two numbers from the keyboard and print their sum

use std::io;

fn main() {
    // Declare variables
    let (mut a, mut b, mut sum) = (String::new(), String::new(), String::new());

    // Reading from user input
    println!("Enter first number: ");
    io::stdin()
    .read_line(&mut a)
    .expect("Error reading input");
    println!("Enter second number: ");
    io::stdin()
    .read_line(&mut b)
    .expect("Error reading input");

    // Converting string to integers
    let num1: i32 = a.trim().parse().ok().expect("Program only processes numbers");
    let num2: i32 = b.trim().parse().ok().expect("Program only processes numbers");
    sum = (num1 + num2).to_string();
    println!("The sum is {}", sum);
}