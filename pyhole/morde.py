class Person:
    """A class representing a person with a name and age."""
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.alive = True
        self.happy = True
    super().__init__()
    
    def greet(self):
        """Prints a greeting message."""
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

persone1 = Person("Alice", 20)
persone2 = Person("Bob", 25)

while :
    if persone1.age > persone2.age:
        print(f"{persone1.name} is older than {persone2.name}.")
        persone1.greet()
        persone2.greet()
    else:
        print(f"Bier")








