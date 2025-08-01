<template>
  <div class="container mx-auto space-y-8 p-6">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold">UI Components Template</h1>
      <p class="text-muted-foreground">Comprehensive showcase of all UI components used in the dashboard</p>
    </div>

    <!-- Buttons Section -->
    <Card>
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
        <CardDescription>All button variants and sizes</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div class="flex flex-wrap gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><span>+</span></Button>
        </div>
        <div class="flex flex-wrap gap-2">
          <Button disabled>Disabled</Button>
          <Button>
            <span class="mr-2">+</span>
            With Icon
          </Button>
          <Button variant="outline">
            <span class="mr-2">↓</span>
            Download
          </Button>
        </div>
      </CardContent>
    </Card>

    <!-- Inputs Section -->
    <Card>
      <CardHeader>
        <CardTitle>Inputs & Forms</CardTitle>
        <CardDescription>Input fields, selects, and form controls</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="space-y-2">
            <label class="text-sm font-medium">Text Input</label>
            <Input placeholder="Enter text..." />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Search Input</label>
            <div class="relative">
              <span class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400">🔍</span>
              <Input placeholder="Search..." class="pl-10" />
            </div>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Select</label>
            <Select>
              <SelectOption value="option1">Option 1</SelectOption>
              <SelectOption value="option2">Option 2</SelectOption>
              <SelectOption value="option3">Option 3</SelectOption>
            </Select>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Checkbox</label>
            <div class="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label for="terms" class="text-sm">Accept terms and conditions</label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Cards Section -->
    <Card>
      <CardHeader>
        <CardTitle>Cards</CardTitle>
        <CardDescription>Card layouts and variations</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <span>👥</span>
                Total Users
              </CardTitle>
              <CardDescription>Active users in the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">1,234</div>
              <p class="text-muted-foreground text-xs">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <span>📊</span>
                Revenue
              </CardTitle>
              <CardDescription>Monthly revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">$45,231</div>
              <p class="text-muted-foreground text-xs">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <span>📦</span>
                Orders
              </CardTitle>
              <CardDescription>Total orders this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">+573</div>
              <p class="text-muted-foreground text-xs">+201 since last hour</p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>

    <!-- Badges Section -->
    <Card>
      <CardHeader>
        <CardTitle>Badges</CardTitle>
        <CardDescription>Status indicators and labels</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge class="bg-green-500 text-white">Success</Badge>
          <Badge class="bg-yellow-500 text-white">Warning</Badge>
          <Badge class="bg-blue-500 text-white">Info</Badge>
        </div>
      </CardContent>
    </Card>

    <!-- Avatars Section -->
    <Card>
      <CardHeader>
        <CardTitle>Avatars</CardTitle>
        <CardDescription>User avatars and profile images</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>

    <!-- Dropdown Menus Section -->
    <Card>
      <CardHeader>
        <CardTitle>Dropdown Menus</CardTitle>
        <CardDescription>Context menus and actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex gap-4">
          <Button variant="outline">Actions</Button>
          <Button variant="outline" size="icon">...</Button>
        </div>
      </CardContent>
    </Card>

    <!-- Data Table Section (mock, no dynamic logic) -->
    <Card>
      <CardHeader>
        <CardTitle>Data Table with Search & Sort</CardTitle>
        <CardDescription>Interactive table with filtering, sorting, and bulk actions</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="flex flex-col gap-4 sm:flex-row">
          <div class="relative flex-1">
            <span class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400">🔍</span>
            <Input placeholder="Search users..." class="pl-10" />
          </div>
          <Select class="w-[180px]">
            <SelectOption value="all">All Status</SelectOption>
            <SelectOption value="active">Active</SelectOption>
            <SelectOption value="inactive">Inactive</SelectOption>
            <SelectOption value="pending">Pending</SelectOption>
          </Select>
          <Button>
            <span class="mr-2">+</span>
            Add User
          </Button>
        </div>
        <div class="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="w-12"><Checkbox /></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>john.doe@example.com</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell><Badge>active</Badge></TableCell>
                <TableCell>Engineering</TableCell>
                <TableCell><Button size="sm">...</Button></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>jane.smith@example.com</TableCell>
                <TableCell>User</TableCell>
                <TableCell><Badge variant="secondary">active</Badge></TableCell>
                <TableCell>Marketing</TableCell>
                <TableCell><Button size="sm">...</Button></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-muted-foreground text-sm">Showing 2 of 2 results</p>
          <div class="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Modal/Dialog Section (mock) -->
    <Card>
      <CardHeader>
        <CardTitle>Modals & Dialogs</CardTitle>
        <CardDescription>Modal dialogs and confirmations</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex gap-4">
          <Button>Open Modal</Button>
          <Button variant="destructive">Delete Confirmation</Button>
        </div>
      </CardContent>
    </Card>

    <!-- Icons Section -->
    <Card>
      <CardHeader>
        <CardTitle>Icons</CardTitle>
        <CardDescription>Common icons used throughout the application</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-4 gap-4 md:grid-cols-8">
          <div class="flex flex-col items-center gap-2 rounded border p-2">
            <span>🏠</span>
            <span class="text-xs">Home</span>
          </div>
          <div class="flex flex-col items-center gap-2 rounded border p-2">
            <span>👥</span>
            <span class="text-xs">Users</span>
          </div>
          <div class="flex flex-col items-center gap-2 rounded border p-2">
            <span>📊</span>
            <span class="text-xs">Analytics</span>
          </div>
          <div class="flex flex-col items-center gap-2 rounded border p-2">
            <span>⚙️</span>
            <span class="text-xs">Settings</span>
          </div>
          <div class="flex flex-col items-center gap-2 rounded border p-2">
            <span>🔔</span>
            <span class="text-xs">Notifications</span>
          </div>
          <div class="flex flex-col items-center gap-2 rounded border p-2">
            <span>✉️</span>
            <span class="text-xs">Mail</span>
          </div>
          <div class="flex flex-col items-center gap-2 rounded border p-2">
            <span>📞</span>
            <span class="text-xs">Phone</span>
          </div>
          <div class="flex flex-col items-center gap-2 rounded border p-2">
            <span>📅</span>
            <span class="text-xs">Calendar</span>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Separators Section -->
    <Card>
      <CardHeader>
        <CardTitle>Separators & Dividers</CardTitle>
        <CardDescription>Visual separators and dividers</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div>
          <p>Content above</p>
          <div class="my-4 border-t"></div>
          <p>Content below</p>
        </div>
        <div class="flex items-center gap-4">
          <span>Left content</span>
          <div class="h-4 w-px bg-gray-300"></div>
          <span>Right content</span>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardDescription from '@/components/ui/CardDescription.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import SelectOption from '@/components/ui/SelectOption.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Badge from '@/components/ui/Badge.vue'
import Avatar from '@/components/ui/Avatar.vue'
import AvatarImage from '@/components/ui/AvatarImage.vue'
import AvatarFallback from '@/components/ui/AvatarFallback.vue'
import Table from '@/components/ui/Table.vue'
import TableHeader from '@/components/ui/TableHeader.vue'
import TableBody from '@/components/ui/TableBody.vue'
import TableRow from '@/components/ui/TableRow.vue'
import TableCell from '@/components/ui/TableCell.vue'
import TableHead from '@/components/ui/TableHead.vue'
</script>
