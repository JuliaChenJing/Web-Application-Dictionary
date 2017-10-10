
import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ChooseServlet
 */
@WebServlet("/ChooseServlet")
public class ChooseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ChooseServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException	
    {
    	RequestDispatcher dispatch =
    		request.getRequestDispatcher("Choose.jsp");
    		dispatch.forward(request, response);
    		
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    		throws ServletException, IOException
    {
    		String choice = request.getParameter("radioJSPCool");
    		if (choice != null)
    		System.out.println ("choice= "+ choice);
    		else
    		System.out.println("No choice made");
    		RequestDispatcher dispatch =
    		request.getRequestDispatcher("Choose.jsp");
    		dispatch.forward(request, response);
    }

}
