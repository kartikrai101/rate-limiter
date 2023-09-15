# rateLimiter
This is a small demonstration of how rate limiters work! I have used a simple client side screen where the user needs to click on the <b>Generate</b> button to generate a Lucky number.
I have put a limit of 5 requests per minute. If a user makes a request beyond that, it will send a message that "Server needs to cool down!".

# What are Rate Limiters?
Rate limiters are mechanisms used to control and limit the rate at which requests or operations can be made by users, clients, or applications accessing a service or resource. They enforce specific limits on the number of requests or operations that can be performed within a defined time frame, such as requests per second or per minute. Rate limiters are commonly used in various contexts, including web services, APIs, network traffic, and more. Here are the advantages of using rate limiters:

Protection Against Abuse: Rate limiters help protect services and resources from abuse, including Distributed Denial of Service (DDoS) attacks, brute force attacks, and other malicious activities. By limiting the rate of incoming requests, they prevent overwhelming the system.

Resource Management: Rate limiters ensure that resources, such as CPU, memory, and bandwidth, are allocated fairly and efficiently among users or clients. This prevents a single user or client from monopolizing resources to the detriment of others.

Maintaining Service Availability: Rate limiting prevents service degradation or downtime during periods of high traffic or unexpected spikes in requests. It ensures that the system remains responsive and available to all users.

Stability: Rate limiters help maintain system stability by preventing excessive resource consumption, which can lead to crashes, slowdowns, or outages. They keep the system running smoothly even under heavy loads.

Predictable Performance: Rate limiting provides predictable and consistent performance for both users and administrators. It allows service providers to manage their infrastructure effectively and allocate resources based on expected usage patterns.

Fairness: Rate limiters promote fairness by ensuring that all users or clients have an equal opportunity to access resources. They prevent a small number of users from monopolizing the available capacity.

User Experience: Rate limiting can improve the user experience by preventing slow response times or service interruptions caused by resource exhaustion. Users experience more consistent and reliable service.

Efficient Use of Resources: Rate limiters encourage efficient use of resources by discouraging wasteful or abusive behavior. This can lead to cost savings and more sustainable resource management.

Customization: Rate limiting rules can be customized based on specific user types, subscription levels, or other criteria. Different users or clients can have different rate limits to meet their needs.

Security: Rate limiters help protect against security vulnerabilities, such as password guessing attacks. By limiting the rate of login attempts, they make it more difficult for attackers to guess passwords.

Operational Insights: Many rate limiting solutions offer monitoring and reporting capabilities, allowing administrators to gain insights into usage patterns, identify potential issues, and adjust rate limits as needed.

Compliance: Rate limiting can help organizations comply with regulations or service-level agreements (SLAs) that specify resource usage limits and performance expectations.

# Steps to run this on your machine:
<li>Clone this repository</li>
<li>Run "npm i" to install all the frontend and backend dependencies</li>
<li>Put your MySQL server credentials in database.js file</li>
<li>Hit 2 terminals, one for the NodeJS server and another for React</li>
<li>Run "nodemon server.js" in backend directory and "npm run start" in the frontend directory!</li>
<li>All set! Happy coding :)</li>
