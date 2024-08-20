import {
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonCardContent>
          <h1>hello </h1>
        </IonCardContent>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
      <IonFooter>
        <IonCardContent>
          <h1>footer</h1>
        </IonCardContent>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
