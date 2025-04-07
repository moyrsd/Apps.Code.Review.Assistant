import {
    IAppAccessors,
    ILogger,
    IConfigurationExtend,
} from "@rocket.chat/apps-engine/definition/accessors";
import { App } from "@rocket.chat/apps-engine/definition/App";
import { IAppInfo } from "@rocket.chat/apps-engine/definition/metadata";
import { CodeReviewAssistantCommand } from "./src/commands/CodeReviewCommand";

export class CodeReviewAssisstantApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }
    protected async extendConfiguration(
        configuration: IConfigurationExtend
    ): Promise<void> {
        configuration.slashCommands.provideSlashCommand(
            new CodeReviewAssistantCommand(this)
        );
    }
}
