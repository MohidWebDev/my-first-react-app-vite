function App() {
  return (
    <div>
      <h1>My React App</h1>

      <form>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="Enter Your First Name"
        />

        <br />

        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Enter Your Last Name"
        />

        <br />

        <input
          type="number"
          name="phone-number"
          id="phone-number"
          placeholder="Enter Your Phone Number"
        />

        <br />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email ID"
        />
      </form>

      <br />

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/CP1wdSs81c8?si=Z5XiSvH8G72939Pl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/NSu-QVtpvIc?si=stMyWS52fB2tIn3W"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <img
        src="/steam_engine.png"
        alt="Steam engine running on the track"
        height={150}
        width={300}
      />
    </div>
  );
}
export default App;
