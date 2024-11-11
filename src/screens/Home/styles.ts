import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6b6b6b",
    padding: 24,
  },

  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },

  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 6,
    color: "#fff",
    padding: 16,
    fontSize: 16,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    marginTop: 40,
    marginBottom: 40,
  },

  listEmptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
