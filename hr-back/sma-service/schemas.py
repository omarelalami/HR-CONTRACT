from typing import TypedDict, Annotated, List

class AgentState(TypedDict):
    documents: Annotated[List[str], lambda x, y: x + y]
    regulations: Annotated[List[str], lambda x, y: x + y]
    alerts: Annotated[List[str], lambda x, y: x + y]
    updates_needed: Annotated[List[str], lambda x, y: x + y]
    gdpr_checks: Annotated[List[dict], lambda x, y: x + y]