class Book{
  #isbn
  constructor( title, author, isbn, available=true){
    this.title=title;
    this.author=author;
    this.#isbn=isbn;
    this.available=available;
  };
  get(){
    return this.#isbn;
  
  }

  set(ntitle){
    if(this.title===ntitle){
    this.#isbn = this.title.indexOf(ntitle);
    return this.#isbn
    };

  }

  borrowBook(findBookByTitle){
    
    if(this.available ){
      this.available=false;
      return this.available;
    }else{
      return `This book ${this.title} and author: ${this.author} is not available`
    }

  };

  returnBook(){
    if(!this.available){
      this.available=true;
      return this.available;
    }else{
      return `This book ${this.title} and author: ${this.author} has already been returned`
    }


  };
}

class Library{
  constructor(){
    this.books=[]
    
};
  


  addBook(book){
    book.push(this.books);
    return`The book: ${this.books} has been added`;
    
  };

  removeBook(isbn){

    this.books.splice(isbn, 1);
  };

  findBookByTitle(title){
    let found =[];
  found = this.books.filter(book =>book.title === title);

  return found;
  }



};

class DigitalLibrary extends Library{
  constructor(books,isbn){
    super(books);
    this.isbn=isbn

  };

  downloadBook(isbn){
    if(isbn === get() && available){
      return `downloading ${isbn}`;
    }
  }
}
