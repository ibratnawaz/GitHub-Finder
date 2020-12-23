return (
  // ---variables used---
  // const load = false;
  // const name = "Nawaz";
  // const show = true;
  // --------------------
  // Fragment is like a ghost element which does not show in browser on inspect.
  <Fragment>
    {/* using ternary operator to render different component with conditions */}
    {load ? (
      <h4>Loading...</h4>
    ) : (
      <div>
        {/* -- && is used as conditional when we only want it to do something when it true */}
        <h1>Hello !! {show && name}</h1>
        <small>inside else</small>
      </div>
    )}
  </Fragment>
);
