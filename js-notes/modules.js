/**
 * The module pattern has essentially the same goal as the class pattern, 
 * which is to group data and behavior together into logical units. 
 * Also like classes, modules can "include" or "access" the data and behaviors 
 * of other modules, for cooperation sake.
 * 
 * The class form stores methods and data on an object instance, 
 * which must be accessed with the this. prefix. 
 * 
 * With modules, the methods and data are accessed as identifier variables in scope, 
 * without any this. prefix.
 * 
 * With class, the "API" of an instance is implicit in the class definition—also, 
 * all data and methods are public. 
 * 
 * CLASSIC MODULES
 * With the module factory function, you explicitly create and return an object 
 * with any publicly exposed methods, and any data or other unreferenced methods 
 * remain private inside the factory function.
 * 
 * We call the module factories as normal functions without using the "new" keyword.
 */

 