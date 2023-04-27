// Print the range of a number

use std::io;

fn main() {
    let (mut n, mut lower, mut upper) = (String::new(), 0, 0);
    println!("Enter a number: ");
    io::stdin().read_line(&mut n).expect("Error reading input");
    let n: i32 = n.trim().parse().expect("Error parsing number");
    lower = n/10 * 10;
    upper = lower + 10;
    println!("{} is between {} and {}", n, lower, upper);
}