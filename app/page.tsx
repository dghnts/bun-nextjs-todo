import { getTodos } from "@/actions/todo";
import { TodoForm } from "@/components/todo-form";
import { TodoItem } from "@/components/todo-item";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function Page() {
	const todos = await getTodos();

	const stats = {
		total: todos.length,
		pending: todos.filter((t) => !t.completed).length,
	};

	return (
		<main className="h-screen flex items-center justify-center p-4">
			<Card className="w-full max-w-md h-[85vh] min-h-[250px] flex flex-col border-2">
				<CardHeader className="shrink-0">
					<div className="flex items-center justify-center gap-4">
						<img src="/logo.svg" alt="Bun Logo" width={75} height={75} />
						<img src="/nextjs.svg" alt="Next.js Logo" width={65} height={65} />
					</div>
					<CardTitle className="text-center text-2xl font-bold">
						Bun + Next.js Todo
					</CardTitle>
					<CardDescription className="text-center">
						Keep track of your tasks with Bun, Next.js and Tailwind CSS
					</CardDescription>
				</CardHeader>

				<CardContent className="flex-1 min-h-0 flex flex-col space-y-4">
					<TodoForm />
					<Separator />

					<div className="flex items-center justify-between text-sm text-muted-foreground">
						{stats.total > 0 && (
							<>
								<span>
									{stats.total} {stats.total === 1 ? "task" : "tasks"}
								</span>
								<span>{stats.pending} remaining</span>
							</>
						)}
					</div>

					<div className="flex-1 min-h-0 overflow-y-auto space-y-2">
						{todos.length === 0 ? (
							<div className="flex items-center justify-center h-full text-muted-foreground">
								<div className="text-center">
									<p className="text-sm font-medium">No tasks yet</p>
									<p className="text-xs mt-1">Add one above to get started</p>
								</div>
							</div>
						) : (
							todos.map((todo) => (
								<TodoItem
									key={todo.id}
									id={todo.id}
									title={todo.title}
									completed={todo.completed}
								/>
							))
						)}
					</div>
				</CardContent>
			</Card>
		</main>
	);
}
