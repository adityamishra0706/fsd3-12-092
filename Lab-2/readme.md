# File System (FS Moddule)

- FS Module directly communicate with operating system rather than browser, the common operations on a file or folders are
1. File -:
       - write file , read file , append file .
2. Folder -:
       - MKdie / MD , rmdir / rm , readdir .
3. File Metadat -:
       - stat , lstat , rstat .
4. watch -> watch, unwatch
5. stream -> readstream, writestream
   all functions are promise so it must be call with await

   Append -> if file is not created then it will create the file.
   writefile -> it always create the file

# CRUD Project
(Create, Retrieve, Update, Delete)

Assume we are making a cart related project

1. user can add any product (id,name,price,qty) into cart
2. user can see all the items of cart
3. user can remove item from cart
4. user can also update quantity of project
5. all the items should be stored after termination of project
