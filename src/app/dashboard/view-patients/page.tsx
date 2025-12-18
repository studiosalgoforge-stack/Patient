
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search , ArrowLeft } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";

export default function PatientsPage() {
  const router = useRouter();

  const [q, setQ] = useState("");
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1);
const [limit] = useState(10); // patients per page
const [totalPages, setTotalPages] = useState(1);

//   async function fetchList() {
//     setLoading(true);
//     try {
//       // const res = await fetch(`/api/patient/list?q=${encodeURIComponent(q)}`);
//       const res = await fetch(
//   `/api/patient/list?q=${encodeURIComponent(q)}&page=${page}&limit=${limit}`
// );

//       const data = await res.json();
//       if (!res.ok) {
//         toast.error(data.error || "Could not load");
//       } else {
//         setPatients(data.patients || []);
//       }
//     } catch (err: any) {
//       toast.error(err.message || "Server error");
//     }
//     setLoading(false);
//   }


async function fetchList() {
  setLoading(true);
  try {
    const res = await fetch(
      `/api/patient/list?q=${encodeURIComponent(q)}&page=${page}&limit=${limit}`
    );
    const data = await res.json();

    if (!res.ok) {
      toast.error(data.error || "Could not load");
    } else {
      setPatients(data.patients || []);
      setTotalPages(data.totalPages || 1);
    }
  } catch (err: any) {
    toast.error(err.message || "Server error");
  }
  setLoading(false);
}




  const handleDelete = async (patientId: string) => {
  try {
    const res = await fetch(`/api/patient/${patientId}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.error || "Delete failed");
      return;
    }

    toast.success("Patient deleted successfully");
    fetchList(); // 🔁 refresh table
  } catch (err: any) {
    toast.error("Server error");
  }
};


  useEffect(() => {
    fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
         <Button
        onClick={() => router.push("/dashboard")}
        variant="ghost"
        className="flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-700 transition font-semibold p-0"
      >
        <ArrowLeft size={20} className="text-blue-600" />
        Back to Dashboard
      </Button>

      
        <h2 className="text-2xl font-semibold text-blue-700">View Patients List</h2>
        <div className="flex gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => router.push("/dashboard/add-patient")}><Plus className="mr-2 h-4 w-4  " /> Add Patient</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-blue-700" >Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input placeholder="Search by name / mobile / patient id" value={q} onChange={(e) => setQ(e.target.value)} />
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={fetchList}><Search className="mr-2 h-4 w-4" /> Search</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-700">Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Patient ID</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={5}>Loading...</TableCell></TableRow>
              ) : patients.length === 0 ? (
                <TableRow><TableCell colSpan={5}>No patients found</TableCell></TableRow>
              ) : (
                patients.map((p: any) => (
                  <TableRow key={p._id}>
                    <TableCell>{p.name}</TableCell>
                    <TableCell>{p.patientId}</TableCell>
                    <TableCell>{p.mobile}</TableCell>
                    <TableCell>{p.visits?.length ? p.visits[p.visits.length - 1].date : "-"}</TableCell>
                    <TableCell>
                      <Button variant="ghost" onClick={() => router.push(`/dashboard/patient/${p.patientId}`)}>View</Button>
                        <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="ghost" className="text-red-600 hover:text-red-700">
        <Trash2 size={18} />
      </Button>
    </AlertDialogTrigger>

    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete Patient</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to delete <b>{p.name}</b>?  
          This action cannot be undone.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction
          className="bg-red-600 hover:bg-red-700"
          onClick={() => handleDelete(p.patientId)}
        >
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="flex justify-center items-center gap-2 mt-6">
  <Button
    variant="outline"
    disabled={page === 1}
    onClick={() => setPage((p) => p - 1)}
  >
    Back
  </Button>

  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pno) => (
    <Button
      key={pno}
      variant={page === pno ? "default" : "outline"}
      onClick={() => setPage(pno)}
    >
      {pno}
    </Button>
  ))}

  <Button
    variant="outline"
    disabled={page === totalPages}
    onClick={() => setPage((p) => p + 1)}
  >
    Next
  </Button>
</div>

    </div>
  );
}
