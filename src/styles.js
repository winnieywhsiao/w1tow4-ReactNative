import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#00bfff',
    flex: 1,
    // margin: "auto",
    flexDirection: "row",
    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#00ffff",
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    flex: 4,
    fontSize: 24,
  },

  content: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default styles;
