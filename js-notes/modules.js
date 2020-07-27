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

 /**
  * ES MODULES
  ES modules (ESM), introduced to the JS language in ES6, are meant to serve much the 
  same spirit and purpose as the existing classic modules just described, 
  especially taking into account important variations and use cases from 
  AMD(Asynchronous Module Definition), UMD(Universal Module Definition), and CommonJS.

  The implementation approach does, however, differ significantly.
  First, there's no wrapping function to define a module. The wrapping context is a file. 
  ESMs are always file-based; one file, one module.

  Second, you don't interact with a module's "API" explicitly, but rather use the export keyword 
  to add a variable or method to its public API definition. If something is defined in a module 
  but not exported, then it stays hidden (just as with classic modules).

  Third, and maybe most noticeably different from previously discussed patterns, 
  you don't "instantiate" an ES module, you just import it to use its single instance. 
  ESMs are, in effect, "singletons," in that there's only one instance ever created, 
  at first import in your program, and all other imports just receive a reference to that
  same single instance. If your module needs to support multiple instantiations, 
  you have to provide a classic module-style factory function on your ESM definition 
  for that purpose.
  **/

