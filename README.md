# Programming_Languages

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [C++](#cpp)
   - [Installation](#cpp-installation)
   - [Basic Usage](#cpp-basic-usage)
4. [Java](#java)
   - [Installation](#java-installation)
   - [Basic Usage](#java-basic-usage)
5. [JavaScript](#javascript)
   - [Setup](#javascript-setup)
   - [Basic Usage](#javascript-basic-usage)
6. [Resources](#resources)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

This repository contains code examples and documentation for three popular programming languages: C++, Java, and JavaScript. Each section provides installation instructions, basic usage examples, and other relevant information to help you get started with these languages.

## Prerequisites

- A computer with an operating system that supports development tools for the respective languages.
- Basic knowledge of programming concepts.

## C++

### Installation

1. **Windows:**
   - Download and install [MinGW](http://www.mingw.org/).
   - Add `C:\MinGW\bin` to your system's PATH.

2. **macOS:**
   - Install Xcode from the App Store.
   - Install Command Line Tools with `xcode-select --install`.

3. **Linux:**
   - Use your package manager to install `g++`, e.g., `sudo apt-get install g++`.

### Basic Usage

1. **Hello World Program:**
   ```cpp
   #include <iostream>

   int main() {
       std::cout << "Hello, World!" << std::endl;
       return 0;
   }
   ```

2. **Compile and Run:**
   ```sh
   g++ hello.cpp -o hello
   ./hello
   ```

## Java

### Installation

1. **Download and Install JDK:**
   - Download the Java Development Kit (JDK) from [Oracle's website](https://www.oracle.com/java/technologies/javase-downloads.html).
   - Follow the installation instructions specific to your operating system.

2. **Set Up Environment Variables:**
   - Set the `JAVA_HOME` environment variable to the JDK installation directory.
   - Add `JAVA_HOME/bin` to your system's PATH.

### Basic Usage

1. **Hello World Program:**
   ```java
   public class HelloWorld {
       public static void main(String[] args) {
           System.out.println("Hello, World!");
       }
   }
   ```

2. **Compile and Run:**
   ```sh
   javac HelloWorld.java
   java HelloWorld
   ```

## JavaScript

### Setup

1. **Install Node.js:**
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Verify Installation:**
   ```sh
   node -v
   npm -v
   ```

### Basic Usage

1. **Hello World Program:**
   ```javascript
   console.log("Hello, World!");
   ```

2. **Run the Program:**
   ```sh
   node hello.js
   ```

## Resources

Here are some additional resources to help you learn and master these programming languages:

### C++

- [C++ Reference](https://en.cppreference.com/)
- [Learn C++](https://www.learncpp.com/)
- [The C++ Programming Language](https://www.stroustrup.com/4th.html) by Bjarne Stroustrup

### Java

- [Official Java Documentation](https://docs.oracle.com/en/java/)
- [Java Programming and Software Engineering Fundamentals Specialization](https://www.coursera.org/specializations/java-programming) on Coursera
- [Effective Java](https://www.oreilly.com/library/view/effective-java/9780134686097/) by Joshua Bloch

### JavaScript

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript Info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/) by Marijn Haverbeke

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new examples you would like to see included. When contributing, please follow the guidelines below:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear and descriptive commit messages.
4. Push your changes to your fork.
5. Open a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
