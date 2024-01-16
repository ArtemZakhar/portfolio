import { type ReactNode, createContext, useReducer, useContext } from 'react';

export type BookedSession = {
  id: string;
  title: string;
  summary: string;
  date: string;
};

type BookedSessionsState = {
  sessions: BookedSession[];
};

type BookedSessionContextValue = BookedSessionsState & {
  addSession: (session: BookedSession) => void;
  removeSession: (id: string) => void;
};

const initialState: BookedSessionsState = {
  sessions: [],
};

const BookedSessionContext = createContext<BookedSessionContextValue | null>(null);

export function useBookedSessionContext() {
  const sessionsCtx = useContext(BookedSessionContext);
  if (sessionsCtx === null) throw new Error('Times Context is null - that should not be the case!');

  return sessionsCtx;
}

type bookedSessionContextProviderProps = {
  children: ReactNode;
};

type AddSession = {
  type: 'ADD_SESSION';
  payload: BookedSession;
};

type RemoveSession = {
  type: 'REMOVE_SESSION';
  payload: string;
};

type Action = AddSession | RemoveSession;

function sessionsReducer(state: BookedSessionsState, action: Action) {
  if (action.type === 'ADD_SESSION') {
    return {
      ...state,
      sessions: [...state.sessions, action.payload],
    };
  }
  if (action.type === 'REMOVE_SESSION') {
    return {
      ...state,
      sessions: state.sessions.filter((session) => session.id !== action.payload),
    };
  }
  return state;
}

export default function BookedSessionContextProvider({
  children,
}: bookedSessionContextProviderProps) {
  const [sessionsState, dispatch] = useReducer(sessionsReducer, initialState);
  const ctx: BookedSessionContextValue = {
    sessions: sessionsState.sessions,
    addSession: (session: BookedSession) => {
      dispatch({ type: 'ADD_SESSION', payload: session });
    },
    removeSession: (id: string) => {
      dispatch({ type: 'REMOVE_SESSION', payload: id });
    },
  };

  return <BookedSessionContext.Provider value={ctx}>{children}</BookedSessionContext.Provider>;
}
