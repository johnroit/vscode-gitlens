import type { State } from '../../../../plus/webviews/workspaces/protocol';
import { App } from '../../shared/appBase';
import '../../shared/components/codicon';
import '../../shared/components/avatars/avatar-item';
import '../../shared/components/avatars/avatar-stack';
import '../../shared/components/table/table-container';
import '../../shared/components/table/table-row';
import '../../shared/components/table/table-cell';
import './components/workspace-list';
import './components/workspace-item';
import './workspaces.scss';

export class WorkspacesApp extends App<State> {
	constructor() {
		super('WorkspacesApp');
	}
}

new WorkspacesApp();
