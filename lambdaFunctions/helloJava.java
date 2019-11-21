package helloLambda;

//import com.amazonaws.services.lambda.runtime.*;

public class Hello {
    public String myHandler(int myCount, Context context) {
        return "Hello World";
    }
}

//helloLambda.Hello::myHandler