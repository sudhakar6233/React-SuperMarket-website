import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      {/* Marquee for vegetable offers at the top */}
      <marquee className="offers-marquee">
        🥦 Fresh Broccoli - 20% Off! 🍎 Apples - ₹150/kg Only! 🥕 Carrots - Buy 1kg, Get 500g Free! 🍉 Watermelon - ₹30/kg! 🍇 Grapes - 40% Off Today!
      </marquee>

      <div className="login-container">
        <h2 className="login-title">VEG MART LOGIN</h2>
        <form>
          <div className="mb-4">
            <label className="login-label" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="login-input" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="login-label" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="login-input" 
              placeholder="Enter your password" 
              required 
            />
          </div>
          <div className="mb-4 remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="remember-label">Remember Me</label>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="forgot-password">
            <a href="/reset-password" className="forgot-password-link">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
