import React from 'react';

export default function AuthForm({ email, setEmail, password, setPassword, error, handleSubmit }) {
  return (
    <>
      <div className="error"> {error && <p>{error}</p>}</div>
      <div className="auth-container">
        <h1>Log in / sign up</h1>
        <form className="form">
          <div className="form-controls" onSubmit={handleSubmit}>
            <label>email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-controls">
            <label>password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <input type="submit" className="submit-btn" />
        </form>
      </div>
    </>
  );
}
