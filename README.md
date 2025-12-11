# Bonny – Sistema TypeScript per Startup, Incentivi e Cittadini

Questo progetto modella, in TypeScript, il funzionamento di una startup innovativa nel mondo dello sport (Bonny) che semplifica l’accesso ai bonus statali e collega i cittadini alle associazioni sportive convenzionate.

L’obiettivo è mostrare come, tramite interfacce e classi, la tecnologia possa facilitare:
- l’erogazione di incentivi statali legati allo sport,
- il supporto a startup innovative,
- la partecipazione attiva dei cittadini ad attività sportive.

---

# Struttura del progetto

```text
progetto-bonny/
├─ src/
│  ├─ interfacce.ts   # Definizione delle interfacce IStartup, IIncentivo, ICittadino
│  ├─ classi.ts       # Implementazione delle classi Startup, Incentivo, Cittadino
│  └─ main.ts         # Script di test / demo che istanzia oggetti e simula i flussi
├─ dist/              # Output JavaScript generato dal compilatore TypeScript
├─ node_modules/      # Dipendenze npm (ignorate su GitHub)
├─ package.json       # Configurazione npm e dipendenze del progetto
├─ package-lock.json  # Versioni bloccate delle dipendenze
├─ tsconfig.json      # Configurazione del compilatore TypeScript
└─ README.md          # Documentazione del progetto
