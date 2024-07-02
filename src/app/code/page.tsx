"use client";
import React, { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  NodeProps,
  NodeMouseHandler,
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type CustomNodeData = {
  label: string;
};

const CustomNode: React.FC<NodeProps<CustomNodeData>> = ({ data, id }) => {
  return (
    <>
      <Handle
        style={{ visibility: "hidden" }}
        type="target"
        position={Position.Top}
      />
      <div
        style={{
          background: "#4a4fff",
          color: "white",
          border: "1px solid #7676ff",
          borderRadius: "5px",
          padding: "10px",
          fontSize: "14px",
          textAlign: "center",
          width: 150,
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#7676ff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#4a4fff";
        }}
      >
        {data.label}
      </div>
      <Handle
        style={{ visibility: "hidden" }}
        type="source"
        position={Position.Bottom}
      />
    </>
  );
};

const initialNodes: Node<CustomNodeData>[] = [
  {
    id: "1",
    data: { label: "Arrays & Hashing" },
    position: { x: 400, y: 0 },
    type: "custom",
  },
  {
    id: "2",
    data: { label: "Two Pointers" },
    position: { x: 200, y: 100 },
    type: "custom",
  },
  {
    id: "3",
    data: { label: "Stack" },
    position: { x: 600, y: 100 },
    type: "custom",
  },
  {
    id: "4",
    data: { label: "Binary Search" },
    position: { x: 0, y: 200 },
    type: "custom",
  },
  {
    id: "5",
    data: { label: "Sliding Window" },
    position: { x: 200, y: 200 },
    type: "custom",
  },
  {
    id: "6",
    data: { label: "Linked List" },
    position: { x: 400, y: 200 },
    type: "custom",
  },
  {
    id: "7",
    data: { label: "Trees" },
    position: { x: 198.8, y: 296.6 },
    type: "custom",
  },
  {
    id: "8",
    data: { label: "Tries" },
    position: {
      x: 15.4,
      y: 398.9,
    },
    type: "custom",
  },
  {
    id: "9",
    data: { label: "Heap / Priority Queue" },
    position: {
      x: 244.2,
      y: 388.1,
    },
    type: "custom",
  },
  {
    id: "10",
    data: { label: "Backtracking" },
    position: {
      x: 505.9,
      y: 377.7,
    },
    type: "custom",
  },
  {
    id: "11",
    data: { label: "Intervals" },
    position: {
      x: 85.8,
      y: 571.1,
    },
    type: "custom",
  },
  {
    id: "12",
    data: { label: "Greedy" },
    position: {
      x: 309.9,
      y: 569.3,
    },
    type: "custom",
  },
  {
    id: "13",
    data: { label: "Graphs" },
    position: {
      x: 431.4,
      y: 479.0,
    },
    type: "custom",
  },
  {
    id: "14",
    data: { label: "1-D DP" },
    position: {
      x: 679.9,
      y: 477.2,
    },
    type: "custom",
  },
  {
    id: "15",
    data: { label: "Advanced Graphs" },
    position: {
      x: 505.0,
      y: 578.2,
    },
    type: "custom",
  },
  {
    id: "16",
    data: { label: "2-D DP" },
    position: {
      x: 595.8,
      y: 667.8,
    },
    type: "custom",
  },
  {
    id: "17",
    data: { label: "Bit Manipulation" },
    position: {
      x: 783.1,
      y: 667.8,
    },
    type: "custom",
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e2-5",
    source: "2",
    target: "5",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e2-6",
    source: "2",
    target: "6",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e4-7",
    source: "4",
    target: "7",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e5-7",
    source: "5",
    target: "7",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e7-8",
    source: "7",
    target: "8",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e7-9",
    source: "7",
    target: "9",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e7-10",
    source: "7",
    target: "10",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e9-11",
    source: "9",
    target: "11",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e9-12",
    source: "9",
    target: "12",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e10-13",
    source: "10",
    target: "13",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e10-14",
    source: "10",
    target: "14",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e13-15",
    source: "13",
    target: "15",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e14-16",
    source: "14",
    target: "16",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
  {
    id: "e14-17",
    source: "14",
    target: "17",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },
  },
];

interface Problem {
  name: string;
  difficulty: string;
  videoSolution: boolean;
  code: string;
}

interface ProblemData {
  [topic: string]: Problem[];
}

const problemData: ProblemData = {
  "Arrays & Hashing": [
    {
      name: "Two Sum",
      difficulty: "Easy",
      videoSolution: true,
      code: "Python",
    },
    {
      name: "Valid Anagram",
      difficulty: "Easy",
      videoSolution: true,
      code: "Python",
    },
    {
      name: "Group Anagrams",
      difficulty: "Medium",
      videoSolution: true,
      code: "Python",
    },
  ],
  "Two Pointers": [
    {
      name: "Valid Palindrome",
      difficulty: "Easy",
      videoSolution: true,
      code: "Python",
    },
    {
      name: "3Sum",
      difficulty: "Medium",
      videoSolution: true,
      code: "Python",
    },
    {
      name: "Container With Most Water",
      difficulty: "Medium",
      videoSolution: true,
      code: "Python",
    },
  ],
  // ... (add more problem data for other topics)
};

const AlgorithmHierarchyDiagram: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const onNodeClick: NodeMouseHandler = useCallback((event, node) => {
    setSelectedNode(node.id);
  }, []);

  const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);
  const selectedNodeData = nodes.find((n) => n.id === selectedNode)?.data.label;

  {
    selectedNodeData &&
      problemData[selectedNodeData]?.map((problem: Problem, index: number) => (
        <TableRow key={index} className="border-b border-gray-700">
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell className="text-white">{problem.name}</TableCell>
          <TableCell className="text-white">{problem.difficulty}</TableCell>
          <TableCell className="text-white">
            {problem.videoSolution ? "🎥" : ""}
          </TableCell>
          <TableCell className="text-white">{problem.code}</TableCell>
        </TableRow>
      ));
  }

  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#1e1e1e" }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.1}
        maxZoom={1.5}
        defaultEdgeOptions={{
          style: { stroke: "white", strokeWidth: 4.5 },
        }}
      >
        <Background color="#555" gap={16} />
        <Controls />
      </ReactFlow>
      <Sheet
        open={selectedNode !== null}
        onOpenChange={() => setSelectedNode(null)}
      >
        <SheetContent
          side="right"
          className="w-[400px] sm:w-[540px] bg-[#2a2a2a] text-white border-l border-gray-700"
        >
          <SheetHeader>
            <SheetTitle className="text-white">
              {selectedNode
                ? nodes.find((n) => n.id === selectedNode)?.data.label
                : ""}
            </SheetTitle>
          </SheetHeader>
          <div className="py-4">
            <h3 className="mb-2 font-semibold">Prerequisites</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="prerequisite" />
                <label htmlFor="prerequisite" className="text-white">
                  Advanced Algorithms
                </label>
              </div>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-700">
                <TableHead className="w-[50px] text-white">Status</TableHead>
                <TableHead className="text-white">Problem</TableHead>
                <TableHead className="text-white">Difficulty</TableHead>
                <TableHead className="text-white">Video Solution</TableHead>
                <TableHead className="text-white">Code</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedNodeData &&
                problemData[selectedNodeData] // nodes.find((n) => n.id === selectedNode)?.data.label
                  ?.map((problem: Problem, index: number) => (
                    <TableRow key={index} className="border-b border-gray-700">
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell className="text-white">
                        {problem.name}
                      </TableCell>
                      <TableCell className="text-white">
                        {problem.difficulty}
                      </TableCell>
                      <TableCell className="text-white">
                        {problem.videoSolution ? "🎥" : ""}
                      </TableCell>
                      <TableCell className="text-white">
                        {problem.code}
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AlgorithmHierarchyDiagram;
