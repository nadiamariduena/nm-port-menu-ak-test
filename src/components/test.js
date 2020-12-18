<header>
<div className="nav_container">
  <div className="nav_wrapper">
    {/* the inner header is the 100px box where the logo and the menu button are situated */}
    <div className="inner-header">
      <div className="logo">
        <Link to="/">TESTING</Link>
      </div>
      {/* ---------- */}
      <div className="menu">
        <button disabled={disabled} onClick={handleMenu}>
          {state.menuName}
        </button>
      </div>
    </div>
  </div>
</div>
<Hamburger state={state} />
</header>