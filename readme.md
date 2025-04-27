# Model Relationnel
```
Utilisateur(id PK, nom, prenom, email UNIQUE, mot_de_passe, photo_profil, banniere, date_naissance, bio, date_inscription)
```

```
Publication(id PK, auteur_id FK REFERENCES Utilisateur(id), contenu_texte, image, fichier, date_publication)
```

```
Commentaire(id PK, publication_id FK REFERENCES Publication(id), auteur_id FK REFERENCES Utilisateur(id), contenu, date_commentaire)
```

```
Reaction(id PK, utilisateur_id FK REFERENCES Utilisateur(id), publication_id FK REFERENCES Publication(id), type)
```

```
Message(id PK, expediteur_id FK REFERENCES Utilisateur(id), destinataire_id FK REFERENCES Utilisateur(id), contenu, date_envoi)
```

```
Amitie(id PK, demandeur_id FK REFERENCES Utilisateur(id), receveur_id FK REFERENCES Utilisateur(id), statut, date_demande)
```

```
Groupe(id PK, nom, description, createur_id FK REFERENCES Utilisateur(id))
```


```
GroupeMembre(id PK, groupe_id FK REFERENCES Groupe(id), utilisateur_id FK REFERENCES Utilisateur(id), role)
```