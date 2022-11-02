Question 1: What options do we have to establish such communication?

Answer: There are there "styles" I would talk about - 

1. Synchronous Communication(HTTP - request/response)
2. Asynchronous One-to-One Communication(Queue)
3. Asynchronous Publish/Subscribe(Events)


Question 2: For each option describe what are the pros and cons of this solution?

 - Synchronous Communication(HTTP - request/response):
   - Pros:
     1. Less infrastructure set up and maintenance

   - Cons:
     1. A single request from the client point of view might be forwarded through many different services. It’s possible that one of those services is down because of a failure, maintenance, or just might be overloaded, which causes an extremely slow response to client requests coming into the system

 - Asynchronous One-to-One Communication(Queue):
   - Pros:
     1. Receiver service failure doesn't technically cause a downtime in the forwarding service.

   - Cons:
     1. Relies on monitoring successful and failed requests.
     2. Logging and monitoring could be a pain
     3. Generally requires more resources(queues, queue-handlers...)

 - Asynchronous Publish/Subscribe(Events):
   - Pros:
     1. Mitigates spikes (if there're more tasks to be done than usual by an one service, they will be done when the service can handle them, as opposed to not being able to do them immediately)

   - Cons:
     1. Relies on monitoring successful and failed requests.
     2. Logging and monitoring could be a pain
     3. Generally requires more resources(logs setup, event-handlers...)



Question 3: For each option describe what are the cases the solution fits best?


Synchronous Communication :- 
  - fits best if the service operations requires a result to proceed the current process
  - also fits if the operations carried out don't required any complex retry mechanism
  - I think it fits if the operations are simple queries and don't change any state

Asynchronous Communication :-
    - fits best if the service operations have multiple other services reacting to them
    - Also fits if the operations takes a lot of time
