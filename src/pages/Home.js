

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'teal',
  },
  paragraph: {
    fontWeight: 300,
    fontSize: 32,
    textAlign: 'center',
    color: 'teal',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>YourPhonebook welcome page</h1>
      <p style={styles.paragraph}>
        If you register or log in here, you can save your contacts for safety
        and unhindered access to them from anywhere
      </p>
    </div>
  );
}
