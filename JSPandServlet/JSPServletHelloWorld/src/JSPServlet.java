
import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class JSPServlet
 */
@WebServlet("/JSPServlet")
public class JSPServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public JSPServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//decide which jsp file to show later
		RequestDispatcher dispatcher = request.getRequestDispatcher("Hello.jsp");
		dispatcher.forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//decide which jsp file to show later
		RequestDispatcher dispatcher = request.getRequestDispatcher("PostMessages.jsp");
		dispatcher.forward(request, response);
	}

}
