// Mongo doesn't have transactions like they do in most relational databases.
// Of interest: cases where multiple operations need to be bundled together; if
// a problem occurs somewhere in the middle before all transactions are able to finish
// rerolls back to the intial state before the transaction was attempted


// MongoDB two-phase commit using Fawn