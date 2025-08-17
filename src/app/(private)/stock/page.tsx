'use client'

import type React from 'react'

import { useState } from 'react'
import { Search, Plus, Edit, Package, X, Gift } from 'lucide-react'

interface InventoryItem {
  id: string
  name: string
  quantityForDay: number
  priceForDay: number
  isCombo?: boolean
  comboItems?: string[] // IDs dos itens que compõem o combo
}

const mockInventory: InventoryItem[] = [
  {
    id: 'I001',
    name: 'Frango Inteiro',
    quantityForDay: 20,
    priceForDay: 47,
  },
  {
    id: 'I002',
    name: 'Meio Frango',
    quantityForDay: 30,
    priceForDay: 25,
  },
  {
    id: 'I003',
    name: 'Batata Frita',
    quantityForDay: 15,
    priceForDay: 12,
  },
  {
    id: 'I004',
    name: 'Refrigerante 2L',
    quantityForDay: 25,
    priceForDay: 8,
  },
  {
    id: 'I005',
    name: 'Molho Especial',
    quantityForDay: 10,
    priceForDay: 3,
  },
  {
    id: 'I006',
    name: 'Salada Verde',
    quantityForDay: 20,
    priceForDay: 8,
  },
]

export default function InventoryManagement() {
  const [inventory, setInventory] = useState<InventoryItem[]>(mockInventory)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isPromoDialogOpen, setIsPromoDialogOpen] = useState(false)
  const [editingField, setEditingField] = useState<{
    itemId: string
    field: string
  } | null>(null)

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  const totalItems = inventory.length
  const totalQuantity = inventory.reduce(
    (sum, item) => sum + item.quantityForDay,
    0
  )
  const totalValue = inventory.reduce(
    (sum, item) => sum + item.quantityForDay * item.priceForDay,
    0
  )

  const updateItem = (itemId: string, field: string, value: any) => {
    setInventory(
      inventory.map((item) => {
        if (item.id === itemId) {
          return { ...item, [field]: value }
        }
        return item
      })
    )
    setEditingField(null)
  }

  const addItem = (newItem: Omit<InventoryItem, 'id'>) => {
    const item: InventoryItem = {
      ...newItem,
      id: `I${Date.now()}`,
    }
    setInventory([...inventory, item])
  }

  const addCombo = (comboData: {
    name: string
    selectedItems: string[]
    price: number
    quantity: number
  }) => {
    const combo: InventoryItem = {
      id: `C${Date.now()}`,
      name: comboData.name,
      quantityForDay: comboData.quantity,
      priceForDay: comboData.price,
      isCombo: true,
      comboItems: comboData.selectedItems,
    }
    setInventory([...inventory, combo])
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Estoque do Domingo
          </h1>
          <p className="text-gray-600">
            Configure quantidades e preços para o dia - Clique para editar
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsAddDialogOpen(true)}
            className="inline-flex items-center rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            <Plus className="mr-2 h-4 w-4" />
            Novo Produto
          </button>
          <button
            onClick={() => setIsPromoDialogOpen(true)}
            className="inline-flex items-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          >
            <Gift className="mr-2 h-4 w-4" />
            Criar Promoção
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">
              Total de Produtos
            </h3>
            <Package className="h-4 w-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{totalItems}</div>
          <p className="text-xs text-gray-500">Produtos para o domingo</p>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">
              Quantidade Total
            </h3>
            <Package className="h-4 w-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {totalQuantity}
          </div>
          <p className="text-xs text-gray-500">Unidades preparadas</p>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">
              Valor Total Estimado
            </h3>
            <Package className="h-4 w-4 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            R$ {totalValue.toFixed(2)}
          </div>
          <p className="text-xs text-gray-500">Se vender tudo</p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border border-gray-300 py-2 pr-3 pl-10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      <div className="space-y-4">
        <EditableInventoryList
          items={filteredInventory}
          onUpdateItem={updateItem}
          onEditItem={(item) => {
            setSelectedItem(item)
            setIsEditDialogOpen(true)
          }}
          editingField={editingField}
          setEditingField={setEditingField}
        />
      </div>

      {isPromoDialogOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Criar Promoção/Combo</h2>
              <button
                onClick={() => setIsPromoDialogOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <PromoForm
              inventory={inventory.filter((item) => !item.isCombo)}
              onClose={() => setIsPromoDialogOpen(false)}
              onSave={addCombo}
            />
          </div>
        </div>
      )}

      {isAddDialogOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Adicionar Novo Produto</h2>
              <button
                onClick={() => setIsAddDialogOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ItemForm
              onClose={() => setIsAddDialogOpen(false)}
              onSave={addItem}
            />
          </div>
        </div>
      )}

      {isEditDialogOpen && selectedItem && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Editar Produto</h2>
              <button
                onClick={() => {
                  setIsEditDialogOpen(false)
                  setSelectedItem(null)
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ItemForm
              item={selectedItem}
              onClose={() => {
                setIsEditDialogOpen(false)
                setSelectedItem(null)
              }}
              onSave={(updatedItem) => {
                updateItem(selectedItem.id, 'name', updatedItem.name)
                updateItem(
                  selectedItem.id,
                  'quantityForDay',
                  updatedItem.quantityForDay
                )
                updateItem(
                  selectedItem.id,
                  'priceForDay',
                  updatedItem.priceForDay
                )
                setIsEditDialogOpen(false)
                setSelectedItem(null)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

interface EditableInventoryListProps {
  items: InventoryItem[]
  onUpdateItem: (itemId: string, field: string, value: any) => void
  onEditItem: (item: InventoryItem) => void
  editingField: { itemId: string; field: string } | null
  setEditingField: (field: { itemId: string; field: string } | null) => void
}

function EditableInventoryList({
  items,
  onUpdateItem,
  onEditItem,
  editingField,
  setEditingField,
}: EditableInventoryListProps) {
  const EditableField = ({
    item,
    field,
    value,
    type = 'text',
    prefix = '',
  }: {
    item: InventoryItem
    field: string
    value: any
    type?: string
    prefix?: string
  }) => {
    const isEditing =
      editingField?.itemId === item.id && editingField?.field === field

    if (isEditing) {
      return (
        <input
          type={type}
          defaultValue={value}
          step={type === 'number' ? '0.01' : undefined}
          className="w-full rounded border border-orange-500 px-2 py-1 text-sm focus:ring-1 focus:ring-orange-500 focus:outline-none"
          onBlur={(e) => {
            const newValue =
              type === 'number'
                ? Number.parseFloat(e.target.value) || 0
                : e.target.value
            onUpdateItem(item.id, field, newValue)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const newValue =
                type === 'number'
                  ? Number.parseFloat(e.currentTarget.value) || 0
                  : e.currentTarget.value
              onUpdateItem(item.id, field, newValue)
            }
            if (e.key === 'Escape') {
              setEditingField(null)
            }
          }}
          autoFocus
        />
      )
    }

    return (
      <span
        className="cursor-pointer rounded px-2 py-1 transition-colors hover:bg-gray-100"
        onClick={() => setEditingField({ itemId: item.id, field })}
        title="Clique para editar"
      >
        {prefix}
        {type === 'number' ? value : value}
      </span>
    )
  }

  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-lg border bg-white p-6 shadow transition-shadow hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                  item.isCombo ? 'bg-yellow-100' : 'bg-orange-100'
                }`}
              >
                {item.isCombo ? (
                  <Gift className="h-6 w-6 text-yellow-600" />
                ) : (
                  <Package className="h-6 w-6 text-orange-600" />
                )}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  {item.isCombo && (
                    <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                      COMBO
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  {item.isCombo
                    ? 'Promoção especial - Clique nos valores para editar'
                    : 'Clique nos valores para editar'}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <div className="text-center">
                <p className="mb-1 text-sm text-gray-600">Quantidade do Dia</p>
                <div className="text-2xl font-bold text-gray-900">
                  <EditableField
                    item={item}
                    field="quantityForDay"
                    value={item.quantityForDay}
                    type="number"
                  />
                </div>
              </div>

              <div className="text-center">
                <p className="mb-1 text-sm text-gray-600">Valor do Dia</p>
                <div className="text-2xl font-bold text-green-600">
                  <EditableField
                    item={item}
                    field="priceForDay"
                    value={item.priceForDay}
                    type="number"
                    prefix="R$ "
                  />
                </div>
              </div>

              <div className="text-center">
                <p className="mb-1 text-sm text-gray-600">Total Estimado</p>
                <div className="text-xl font-semibold text-purple-600">
                  R$ {(item.quantityForDay * item.priceForDay).toFixed(2)}
                </div>
              </div>

              <button
                onClick={() => onEditItem(item)}
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              >
                <Edit className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <div className="rounded-lg border bg-white p-12 text-center shadow">
          <p className="text-gray-500">Nenhum produto encontrado</p>
        </div>
      )}
    </div>
  )
}

function ItemForm({
  item,
  onClose,
  onSave,
}: {
  item?: InventoryItem
  onClose: () => void
  onSave: (item: Omit<InventoryItem, 'id'>) => void
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const newItem = {
      name: formData.get('name') as string,
      quantityForDay: Number(formData.get('quantityForDay')) || 0,
      priceForDay: Number(formData.get('priceForDay')) || 0,
    }

    onSave(newItem)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nome do Produto
        </label>
        <input
          id="name"
          name="name"
          type="text"
          defaultValue={item?.name}
          placeholder="Ex: Frango Inteiro"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="quantityForDay"
          className="block text-sm font-medium text-gray-700"
        >
          Quantidade do Dia
        </label>
        <input
          id="quantityForDay"
          name="quantityForDay"
          type="number"
          defaultValue={item?.quantityForDay}
          placeholder="Ex: 20"
          required
          min="0"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="priceForDay"
          className="block text-sm font-medium text-gray-700"
        >
          Valor do Dia (R$)
        </label>
        <input
          id="priceForDay"
          name="priceForDay"
          type="number"
          step="0.01"
          defaultValue={item?.priceForDay}
          placeholder="Ex: 47.00"
          required
          min="0"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        >
          {item ? 'Salvar' : 'Adicionar'}
        </button>
      </div>
    </form>
  )
}

function PromoForm({
  inventory,
  onClose,
  onSave,
}: {
  inventory: InventoryItem[]
  onClose: () => void
  onSave: (combo: {
    name: string
    selectedItems: string[]
    price: number
    quantity: number
  }) => void
}) {
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [comboName, setComboName] = useState('')
  const [comboPrice, setComboPrice] = useState('')
  const [comboQuantity, setComboQuantity] = useState('')

  const toggleItem = (itemId: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    )
  }

  const selectedItemsData = inventory.filter((item) =>
    selectedItems.includes(item.id)
  )
  const totalOriginalPrice = selectedItemsData.reduce(
    (sum, item) => sum + item.priceForDay,
    0
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedItems.length < 2) {
      alert('Selecione pelo menos 2 itens para criar um combo')
      return
    }

    onSave({
      name: comboName,
      selectedItems,
      price: Number(comboPrice),
      quantity: Number(comboQuantity),
    })
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Nome da Promoção
        </label>
        <input
          type="text"
          value={comboName}
          onChange={(e) => setComboName(e.target.value)}
          placeholder="Ex: Combo Família, Promoção Especial..."
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Selecione os produtos para o combo (mínimo 2)
        </label>
        <div className="grid max-h-60 gap-3 overflow-y-auto rounded-md border border-gray-200 p-3">
          {inventory.map((item) => (
            <label
              key={item.id}
              className="flex cursor-pointer items-center space-x-3 rounded p-2 hover:bg-gray-50"
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleItem(item.id)}
                className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
              />
              <div className="flex flex-1 items-center justify-between">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-sm text-gray-500">
                  R$ {item.priceForDay.toFixed(2)}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {selectedItems.length > 0 && (
        <div className="rounded-md bg-gray-50 p-4">
          <h4 className="mb-2 font-medium text-gray-900">
            Itens selecionados:
          </h4>
          <div className="space-y-1">
            {selectedItemsData.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name}</span>
                <span>R$ {item.priceForDay.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 border-t pt-2">
            <div className="flex justify-between font-medium">
              <span>Total original:</span>
              <span>R$ {totalOriginalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Preço do Combo (R$)
          </label>
          <input
            type="number"
            step="0.01"
            value={comboPrice}
            onChange={(e) => setComboPrice(e.target.value)}
            placeholder="Ex: 65.00"
            required
            min="0"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
          {totalOriginalPrice > 0 && comboPrice && (
            <p className="mt-1 text-xs text-green-600">
              Economia: R${' '}
              {(totalOriginalPrice - Number(comboPrice)).toFixed(2)}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Quantidade do Combo
          </label>
          <input
            type="number"
            value={comboQuantity}
            onChange={(e) => setComboQuantity(e.target.value)}
            placeholder="Ex: 10"
            required
            min="1"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        >
          Criar Combo
        </button>
      </div>
    </form>
  )
}
