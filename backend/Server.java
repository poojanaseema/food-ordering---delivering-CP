import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;
import java.io.OutputStream;
import java.io.InputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;

public class Server {

    public static void main(String[] args) throws IOException {

        HttpServer server = HttpServer.create(
            new InetSocketAddress(8080), 0
        );
        server.createContext("/api/login", (HttpExchange exchange) -> {

    if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {

        InputStream input = exchange.getRequestBody();
        String request = new String(
            input.readAllBytes(),
            StandardCharsets.UTF_8
        );

        System.out.println("Login request: " + request);

        String response = "{\"message\":\"Login successful\"}";

        exchange.getResponseHeaders().set(
            "Content-Type", "application/json"
        );

        exchange.sendResponseHeaders(200, response.length());

        OutputStream output = exchange.getResponseBody();
        output.write(response.getBytes(StandardCharsets.UTF_8));
        output.close();

    } else {

        String response = "Only POST method allowed";

        exchange.sendResponseHeaders(405, response.length());

        OutputStream output = exchange.getResponseBody();
        output.write(response.getBytes());
        output.close();
    }
});

        server.createContext("/api/hello", (HttpExchange exchange) -> {

            String response = "Food Ordering Backend is Working!";

            exchange.sendResponseHeaders(200, response.length());

            OutputStream output = exchange.getResponseBody();
            output.write(response.getBytes());
            output.close();
        });

        server.start();

        System.out.println("Server started!");
        System.out.println("Open: http://localhost:8080/api/hello");
    }task
    ta
}