class library:
    def __init__(self, list, name):
        self.booklist = list
        self.name = name
        self.books = []

    def __display__(self):
        print(f'Library Name: {self.name}')
        print('Book List:')
        for book in self.booklist:
            print(f'- {book}')
       
    def add_book(self, book):
        self.books.append(book)
        print(f'Book "{book}" added to the library.')

    def remove_book(self, book):
        if book in self.books:
            self.books.remove(book)
            print(f'Book "{book}" removed from the library.')
        else:
            print(f'Book "{book}" not found in the library.')

    def list_books(self):
        if self.books:
            print("Books in the library:")
            for book in self.books:
                print(f'- {book}')
        else:
            print("No books in the library.")

    def __lended__(self, book, user):
        self.books.remove(book)
        print(f'Book "{book}" has been lent to {user}.')

    def __return__(self, book):
        self.books.append(book)
        print(f'Book "{book}" has been returned to the library.')

    if __name__ == "__main__":

        books = library(['1984', 'To Kill a Mockingbird', 'The Great Gatsby'], 'City Library')
        while True:
            print("welcome to the library")

            print("1. Display Library")
            print("2. Lend a Book")
            print("3. Return a Book")
            print("4. Add a Book")

            user_choice = input("Enter your choice: ")
            if user_choice not in ['1', '2', '3', '4']:
                print("Invalid input. Please enter a number between 1 and 4.")
                continue

            else:
                user_choice = int(user_choice)

            if user_choice == 1:
                books.__display__()
            elif user_choice == 2:
                book = input("Enter the name of the book you want to lend: ")
                user = input("Enter your name: ")
                books.__lended__(book, user)
            elif user_choice == 3:
                book = input("Enter the name of the book you want to return: ")
                books.__return__(book)
            elif user_choice == 4:
                book = input("Enter the name of the book you want to add: ")
                books.add_book(book)
            else :
                print("Invalid option. Please try again.")

            print("q to quit and c to continue")
            user_choice2 = ""
            while (user_choice2 != "q" and user_choice2 != "c"):
                user_choice2 = input()
                if user_choice2 == "q":
                    exit()  

                elif user_choice2 == "c":
                    continue    

   